package com.app.backend.apirest.models.entity;

import javax.annotation.processing.Generated;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="Cliente")
public class Cliente  implements Serializable {

    @Id
    private String id;

    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false, unique = true)
    private String email;
    private String telefono;
    @Temporal(TemporalType.DATE)
    private Date fecha;

    @PrePersist
    public void prePersist(){
        fecha = new Date();
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
}
