package br.com.harmonicgroup.sigsmu_backend.model;


import br.com.harmonicgroup.sigsmu_backend.service.StatusSolicitacaoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "StatusSolicitacao")
public class StatusSolicitacao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "stt_id")
    private Integer id;

    @Column(name = "stt_nome")
    private String nome;


    // Construtores
    public StatusSolicitacao(){}

    public StatusSolicitacao(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }


}
