package com.nova.MsHv.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.springframework.data.repository.CrudRepository;

import com.nova.MsHv.entidad.ParamEjecutivoCuenta;

@Transactional
public interface ParamestrosEjecutivoCuentaDao extends CrudRepository<ParamEjecutivoCuenta, Long> {
	static final Logger log = Logger.getLogger(ParamestrosEjecutivoCuentaDao.class);

	public List<ParamEjecutivoCuenta> findAll();

}




