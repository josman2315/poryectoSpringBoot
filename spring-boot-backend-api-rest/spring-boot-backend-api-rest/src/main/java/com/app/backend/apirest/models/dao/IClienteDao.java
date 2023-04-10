package com.app.backend.apirest.models.dao;

import com.app.backend.apirest.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClienteDao extends CrudRepository<Cliente, String> {
}
