package br.com.harmonicgroup.sigsmu_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class AssMusicasEscolhidas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "sol_id")
    private SolicitacaoServico solicitacaoServico;

    @ManyToOne
    @JoinColumn(name = "rep_id")
    private Repertorio repertorio;

}