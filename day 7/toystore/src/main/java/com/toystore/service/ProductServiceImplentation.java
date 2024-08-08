package com.toystore.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.toystore.exception.ProductException;
import com.toystore.model.Product;
import com.toystore.request.CreateProductRequest;

@Service
public class ProductServiceImplentation implements ProductService {

  @Override
  public Product createProduct(CreateProductRequest req) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'createProduct'");
  }

  @Override
  public String deleteProduct(Long productId) throws ProductException {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'deleteProduct'");
  }

  @Override
  public Product updateProduct(Long productId) throws ProductException {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateProduct'");
  }

  @Override
  public Product finProductById(Long id) throws ProductException {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'finProductById'");
  }

  @Override
  public List<Product> findProductByCategory(String category) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'findProductByCategory'");
  }

  @Override
  public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
      Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getAllProduct'");
  }

}
