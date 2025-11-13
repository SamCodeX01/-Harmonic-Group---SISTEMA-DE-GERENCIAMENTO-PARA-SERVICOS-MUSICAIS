package br.com.harmonicgroup.sigsmu_backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.harmonicgroup.sigsmu_backend.service.CategoriaService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "categoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cat_id")
    private Integer id;

    @Column(name = "cat_nome")
    private String nome;
    
    
    //Associativas
    @JsonIgnore
    @OneToMany(mappedBy = "categoria")
    private List<Instrumento> instrumentos;


    // Construtores
    public Categoria(){};
    
    public Categoria(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    };

}