package com.heer.ecom.entity;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

import org.springframework.data.annotation.Id;

public class Product {
	@Id
	private Long productId;
	
	private String productName;
	private String productImages;
	private String productDescription;
	private BigDecimal productPrice;
	private BigInteger productCount;
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductImages() {
		return productImages;
	}
	public void setProductImages(String productImages) {
		this.productImages = productImages;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public BigDecimal getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(BigDecimal productPrice) {
		this.productPrice = productPrice;
	}
	public BigInteger getProductCount() {
		return productCount;
	}
	public void setProductCount(BigInteger productCount) {
		this.productCount = productCount;
	}
	
	
}
