package br.com.harmonicgroup.sigsmu_backend.model;


import br.com.harmonicgroup.sigsmu_backend.service.TipoServicoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "TipoServico")
public class TipoServico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ser_id")
    private Integer id;

    @Column(name = "ser_nome")
    private String nome;


    // Construtores
    public TipoServico(){}

    public TipoServico(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }


}
