package com.toystore.service;

import java.time.LocalDate;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.toystore.exception.ProductException;
import com.toystore.model.Category;
import com.toystore.model.Product;
import com.toystore.repository.CategoryRepository;
import com.toystore.repository.ProductRepository;
import com.toystore.request.CreateProductRequest;

@Service
public class ProductServiceImplentation implements ProductService {
  private ProductRepository productRepository;
  private UserService userService;
  private CategoryRepository categoryRepository;

  // public ProductServiceImplentation()

  public ProductServiceImplentation(ProductRepository productRepository, UserService userService,
      CategoryRepository categoryRepository) {
    this.productRepository = productRepository;
    this.userService = userService;
    this.categoryRepository = categoryRepository;
  }

  @Override
  public Product createProduct(CreateProductRequest req) {

    Category topLevel = categoryRepository.findByName(req.getTopLavelCategory());
    if (topLevel == null) {
      Category topLavelCategory = new Category();
      topLavelCategory.setName(req.getTopLavelCategory());
      topLavelCategory.setLevel(1);
      topLevel = categoryRepository.save(topLavelCategory);
    }

    Category secondLevel = categoryRepository.findByNameAndParant(req.getSecondLavelCategory(), topLevel.getName());
    if (secondLevel == null) {

      Category secondLavelCategory = new Category();
      secondLavelCategory.setName(req.getSecondLavelCategory());
      secondLavelCategory.setParentCategory(topLevel);
      secondLavelCategory.setLevel(2);

      secondLevel = categoryRepository.save(secondLavelCategory);
    }

    Category thirdLevel = categoryRepository.findByNameAndParant(req.getThirdLavelCategory(), secondLevel.getName());
    if (thirdLevel == null) {

      Category thirdLavelCategory = new Category();
      thirdLavelCategory.setName(req.getThirdLavelCategory());
      thirdLavelCategory.setParentCategory(secondLevel);
      thirdLavelCategory.setLevel(3);

      thirdLevel = categoryRepository.save(thirdLavelCategory);
    }

    Product product = new Product();
    product.setTitle(req.getTitle());
    product.setColor(req.getColor());
    product.setDescription(req.getDescription());
    product.setDiscountPersent(req.getDiscountPersent());
    product.setDiscountedPrice(req.getDiscountedPrice());
    product.setImageUrl(req.getImageUrl());
    product.setPrice(req.getPrice());
    product.setCategory(thirdLevel);
    product.setCreatedAt(LocalDate.now());
    // return null;
    Product saveProduct = productRepository.save(product);
    // System.out.println("product - "+product);
    return saveProduct;

  }

  @Override
  public String deleteProduct(Long productId) throws ProductException {

    Product product = productRepository.findById(productId)
        .orElseThrow(() -> new ProductException("Product not found"));
    productRepository.delete(product);

    return "Product deleted successfully";

  }

  @Override
  public Product updateProduct(Long productId, Product req) throws ProductException {

    Product product = productRepository.findById(productId)
        .orElseThrow(() -> new ProductException("Product not found"));

    if (req.getQuantity() != 0) {
      product.setQuantity(req.getQuantity());
    }

    return null;
  }

  @Override
  public Product findProductById(Long id) throws ProductException {

    Product product = productRepository.findById(id).orElseThrow(() -> new ProductException("Product not found"));

    return product;

  }

  @Override
  public List<Product> findProductByCategory(String category) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'findProductByCategory'");
  }

  @Override
  public Page<Product> getAllProduct(
      String category,
      List<String> colors,
      List<String> sizes,
      Integer minPrice,
      Integer maxPrice,
      Integer minDiscount,
      String sort,
      String stock,
      Integer pageNumber,
      Integer pageSize) {

    Pageable pageable = PageRequest.of(pageNumber, pageSize);
    List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
    if (!colors.isEmpty()) {
      products = products.stream().filter(p -> colors.contains(p.getColor())).collect(Collectors.toList());
    }
    if (stock != null) {
      if (stock.equals("in_stock")) {
        products = products.stream().filter(p -> p.getQuantity() > 0).collect(Collectors.toList());
      } else if (stock.equals("out_of_stocks")) {
        products = products.stream().filter(p -> p.getQuantity() <= 0).collect(Collectors.toList());
      }
    }
    int startIndex = (int) pageable.getOffset();
		int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());

    List<Product> pageContent = products.subList(startIndex,endIndex);
    Page<Product> filteredPage = new PageImpl<>(pageContent, pageable,products.size());
    return filteredPage;
  }
}
