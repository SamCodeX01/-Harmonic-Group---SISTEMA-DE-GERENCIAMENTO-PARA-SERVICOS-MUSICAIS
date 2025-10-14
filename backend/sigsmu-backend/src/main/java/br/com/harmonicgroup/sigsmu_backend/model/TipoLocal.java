package br.com.harmonicgroup.sigsmu_backend.model;


import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table
public class TipoLocal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "tip_id")
    private Integer id;

    @Column(name = "tip_nome")
    private String nome;


    // Construtores
    public TipoLocal(){}

    public TipoLocal(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }


}
