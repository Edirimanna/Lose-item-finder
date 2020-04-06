package com.madhusanka.spring.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class MyWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer{

	@Override
	protected Class<?>[] getRootConfigClasses() {
		
		return  new Class[] { Appconfig.class };
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		
		return  new Class[] { Webconfig.class };
	}

	@Override
	protected String[] getServletMappings() {
		
		return  new String[] { "/" };
	}

}
