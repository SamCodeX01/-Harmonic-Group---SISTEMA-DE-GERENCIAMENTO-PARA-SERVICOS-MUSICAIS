package br.com.harmonicgroup.sigsmu_backend.model;

import java.util.List;

import br.com.harmonicgroup.sigsmu_backend.service.SolicitacaoServicoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
    
    @Column(name = "sol_dataEvento")
    private String dataEvento;

    @Column(name = "sol_horarioInicio")
    private String horarioInicio;

    @Column(name = "sol_horarioTermino")
    private String horarioTermino;

    @Column(name = "sol_qtdConvidados")
    private String qtdConvidados;
    
    @Column(name = "sol_dataSolicitacao")
    private String dataSolicitacao;
    
    @Column(name = "sol_eOrcamento")
    private String eOrcamento;
    
    @Column(name = "sol_dataAprovacao")
    private String dataAprovacao;


    // Associativas
    @OneToOne
    @JoinColumn(name = "ava_id")
    private Avaliacao avaliacao;

    @OneToOne
    @JoinColumn(name = "cus_id")
    private Custo custo;


    @ManyToOne
    @JoinColumn(name = "cli_cpf")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "ges_cpf")
    private Gestor gestor;

    @ManyToOne
    @JoinColumn(name = "tip_id")
    private TipoLocal tipoLocal;
    
    @ManyToOne
    @JoinColumn(name = "pgt_id")
    private MeioPagamento meioPagamento;
    
    @ManyToOne
    @JoinColumn(name = "stt_id")
    private StatusSolicitacao statusSolicitacao;
    
    @ManyToOne
    @JoinColumn(name = "pac_id")
    private PacoteServico pacoteServico;

    
    @OneToMany(mappedBy = "solicitacaoServico")
    private List<AssMusicasEscolhidas> musicasEscolhidas;
    
    @OneToMany(mappedBy = "solicitacaoServico")
    private List<AssInstrumentosEscolhidos> instrumentosEscolhidos;

    @OneToMany(mappedBy = "solicitacaoServico")
    private List<AssGrupoDoServico> grupoDoServico;


    // Construtores
    public SolicitacaoServico(){};
    
    public SolicitacaoServico(Integer id, String localEvento, String dataEvento, String horarioInicio, String horarioTermino, String qtdConvidados, String dataSolicitacao, String eOrcamento, String dataAprovacao){
        this.id = id;
        this.localEvento = localEvento;
        this.dataEvento = dataEvento;
        this.horarioInicio = horarioInicio;
        this.horarioTermino = horarioTermino;
        this.qtdConvidados = qtdConvidados;
        this.dataSolicitacao = dataSolicitacao;
        this.eOrcamento = eOrcamento;
        this.dataAprovacao = dataAprovacao;
    };

}