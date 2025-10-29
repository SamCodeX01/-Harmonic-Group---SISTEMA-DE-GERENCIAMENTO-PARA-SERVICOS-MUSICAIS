package br.com.harmonicgroup.sigsmu_backend.model;


import br.com.harmonicgroup.sigsmu_backend.service.InstrumentoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "instrumento")
public class Instrumento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ins_id")
    private Integer id;

    @Column(name = "ins_nome")
    private String nome;


    // Construtores
    public Instrumento(){}

    public Instrumento(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }

}
