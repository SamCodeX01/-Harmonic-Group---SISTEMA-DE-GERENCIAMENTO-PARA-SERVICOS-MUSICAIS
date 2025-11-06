package br.com.harmonicgroup.sigsmu_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class AssInstrumentosEscolhidos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "sol_id")
    private SolicitacaoServico solicitacaoServico;

    @ManyToOne
    @JoinColumn(name = "ins_id")
    private Instrumento instrumento;

}