//package com.nova.MsHv.dao;
//
//import java.util.List;
//
//import javax.transaction.Transactional;
//
//import org.apache.log4j.Logger;
//import org.springframework.data.repository.CrudRepository;
//
//import com.nova.MsHv.dto.AdtCustomer;
//
////con Spring Data JPA una entidad DAO que extienda de CrudRepository 
//// obtiene por defecto los siguientes metodos save, delete, deleteAll, findOne y findAll.
//@Transactional
//public interface AdtCustomerDAO extends CrudRepository<AdtCustomer, Long> {
//	static final Logger log = Logger.getLogger(AdtCustomerDAO.class);
//
//	// No es necesario implementar el metodo, spring jpa lo hace siempre y
//	// cuando
//	// el nombre del parametro coincida con un atributo de product
//	// para mas detalles ver:
//	// http://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/#jpa.query-methods.query-creation
//	public AdtCustomer findByIdadtcst(long idadtcst);
//
//	public List<AdtCustomer> findAll();
//
//}
