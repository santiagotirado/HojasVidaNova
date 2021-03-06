package com.nova.MsHv.rest;


import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nova.MsHv.entidad.EjecutivoNegocio;
import com.nova.MsHv.impl.EjecutivoNegocioImpl;
import com.nova.MsHvExcepciones.NovaHVDaoException;

@CrossOrigin
@Controller

/**
 * Class for rest service http for CRUD
 * 
 * @author enlaRed.co
 * @version 1.0
 */
public class EjecutivoNegociosRestController {
	static final Logger log = Logger.getLogger(EjecutivoNegociosRestController.class);
	@Autowired 	private EjecutivoNegocioImpl ejecutivoNegocioImpl;

	@RequestMapping("ejecutivoNegocio/findAll")
	@ResponseBody

	public List<EjecutivoNegocio> getEjecutivoCuenta() throws NovaHVDaoException {

		return ejecutivoNegocioImpl.consultarTodosEjecutivo();
	}

	
	
}
