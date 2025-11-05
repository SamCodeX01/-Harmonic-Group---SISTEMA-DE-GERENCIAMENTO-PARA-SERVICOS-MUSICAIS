package br.com.harmonicgroup.sigsmu_backend.model;

import br.com.harmonicgroup.sigsmu_backend.service.SolicitacaoServicoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "solicitacao_servico")
public class SolicitacaoServico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sol_id")
    private Integer id;

    @Column(name = "sol_localEvento")
    private String localEvento;
    
    @Column(name = "sol_dataHoraEvento")
    private String dataHoraEvento;

    @Column(name = "sol_qtdConvidados")
    private String qtdConvidados;
    
    @Column(name = "sol_dataSolicitacao")
    private String dataSolicitacao;
    
    @Column(name = "sol_eOrcamento")
    private String eOrcamento;
    
    @Column(name = "sol_dataAprovacao")
    private String dataAprovacao;


    // Associações
    @OneToOne(mappedBy = "solicitacaoServico")
    private Avaliacao avaliacao;

    @ManyToOne
    @JoinColumn(name = "cli_cpf")
    private Cliente cliente;


    // Construtores
    public SolicitacaoServico(){};
    
    public SolicitacaoServico(Integer id, String localEvento, String dataHoraEvento, String qtdConvidados, String dataSolicitacao, String eOrcamento, String dataAprovacao){
        this.id = id;
        this.localEvento = localEvento;
        this.dataHoraEvento = dataHoraEvento;
        this.qtdConvidados = qtdConvidados;
        this.dataSolicitacao = dataSolicitacao;
        this.eOrcamento = eOrcamento;
        this.dataAprovacao = dataAprovacao;
    };

}