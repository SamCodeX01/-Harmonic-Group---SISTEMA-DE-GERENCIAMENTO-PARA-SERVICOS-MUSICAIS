package br.com.harmonicgroup.sigsmu_backend.model;

import br.com.harmonicgroup.sigsmu_backend.service.MarcaFabricanteService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "marca_fabricante")
public class MarcaFabricante {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "mar_cpf")
    private Integer id;

    @Column(name = "mar_nome")
    private String nome;


    // Construtores
    public MarcaFabricante(){};
    
    public MarcaFabricante(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    };

}