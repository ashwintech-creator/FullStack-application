package com.toystore.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.toystore.exception.ProductException;
import com.toystore.model.Product;
import com.toystore.request.CreateProductRequest;

public interface ProductService {
  public Product createProduct(CreateProductRequest req);

  public String deleteProduct(Long productId)throws ProductException;

  public Product updateProduct(Long productId)throws ProductException;

  public Product finProductById(Long id)throws ProductException;
  public List<Product> findProductByCategory(String category);

  public Page<Product>getAllProduct(String category,List<String> colors,List<String> sizes,Integer minPrice,Integer maxPrice,Integer minDiscount,String sort,String stock,Integer pageNumber,Integer pageSize);

}
