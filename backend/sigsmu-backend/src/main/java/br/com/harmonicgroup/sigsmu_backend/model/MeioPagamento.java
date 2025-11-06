package br.com.harmonicgroup.sigsmu_backend.model;


import java.util.List;

import br.com.harmonicgroup.sigsmu_backend.service.MeioPagamentoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "meio_pagamento")
public class MeioPagamento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pgt_id")
    private Integer id;

    @Column(name = "pgt_nome")
    private String nome;

    // Associativas
    @OneToMany(mappedBy = "meioPagamento")
    private List<SolicitacaoServico> solicitacoesServico;


    // Construtores
    public MeioPagamento(){}

    public MeioPagamento(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }


}
