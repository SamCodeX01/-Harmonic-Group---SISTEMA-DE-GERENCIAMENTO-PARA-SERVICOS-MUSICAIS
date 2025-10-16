package br.com.harmonicgroup.sigsmu_backend.model;


import br.com.harmonicgroup.sigsmu_backend.service.PacoteServicoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "PacoteServico")
public class PacoteServico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pac_id")
    private Integer id;

    @Column(name = "pac_nome")
    private String nome;


    // Construtores
    public PacoteServico(){}

    public PacoteServico(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }


}
