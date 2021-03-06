//package com.nova.MsHv.dao;
//
//import java.sql.Date;
//import java.util.List;
//
//import javax.transaction.Transactional;
//
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//
//import com.nova.MsHv.dto.InformationContacts;
//
//
//import org.apache.log4j.Logger;
//
////con Spring Data JPA una entidad DAO que extienda de CrudRepository 
//// obtiene por defecto los siguientes metodos save, delete, deleteAll, findOne y findAll.
//@Transactional
//public interface InformationContactsDAO extends CrudRepository<InformationContacts, Long> {
//	static final Logger log = Logger.getLogger(InformationContactsDAO.class);
//
//	// No es necesario implementar el metodo, spring jpa lo hace siempre y
//	// cuando
//	// el nombre del parametro coincida con un atributo de product
//	// para mas detalles ver:
//	// http://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/#jpa.query-methods.query-creation
//	public InformationContacts findByIdinfcnt(long idinfcnt);
//
//	public List<InformationContacts> findAll();
//
//	
//}
