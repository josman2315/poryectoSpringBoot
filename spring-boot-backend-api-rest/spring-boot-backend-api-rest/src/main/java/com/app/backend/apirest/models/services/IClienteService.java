package com.app.backend.apirest.models.services;

import com.app.backend.apirest.models.entity.Cliente;

import java.util.List;

public interface IClienteService {
    public List<Cliente> findAll();

    public Cliente save(Cliente cliente);

}
