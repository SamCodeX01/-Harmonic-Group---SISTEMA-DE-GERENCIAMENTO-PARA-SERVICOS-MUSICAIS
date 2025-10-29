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
@Table(name = "status_solicitacao")
public class StatusSolicitacao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "stt_id")
    private Integer id;

    @Column(name = "stt_situacao")
    private String situacao;


    // Construtores
    public StatusSolicitacao(){}

    public StatusSolicitacao(Integer id, String situacao){
        this.id = id;
        this.situacao = situacao;
    }


}
