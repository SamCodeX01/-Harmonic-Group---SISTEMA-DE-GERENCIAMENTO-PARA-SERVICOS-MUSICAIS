package br.com.harmonicgroup.sigsmu_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.harmonicgroup.sigsmu_backend.service.CustoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "custo")
public class Custo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cus_id")
    private Integer id;

    @Column(name = "cus_combustivel")
    private String combustivel;
    
    @Column(name = "cus_precoLitro")
    private String precoLitro;

    @Column(name = "cus_distancia")
    private String distancia;

    @Column(name = "cus_pedagio")
    private String pedagio;

    @Column(name = "cus_consumoMedioVeiculo")
    private String consumoMedioVeiculo;

    @Column(name = "cus_cacheMusicos")
    private String cacheMusicos;

    @Column(name = "cus_alimentacao")
    private String alimentacao;

    @Column(name = "cus_aluguelEquipamentos")
    private String aluguelEquipamentos;

    @Column(name = "cus_demonstracao")
    private String demonstracao;

    @Column(name = "cus_passagemMusico")
    private String passagemMusico;

    @Column(name = "cus_desconto")
    private String desconto;

    // Associativas
    @JsonIgnore
    @OneToOne(mappedBy = "custo")
    private SolicitacaoServico solicitacaoServico;


    // Construtores
    public Custo(){};
    
    public Custo(Integer id, String combustivel, String precoLitro, String distancia, String pedagio, String consumoMedioVeiculo, String cacheMusicos, String alimentacao, String aluguelEquipamentos, String demonstracao, String passagemMusico, String desconto){
        this.id = id;
        this.combustivel = combustivel;
        this.precoLitro = precoLitro;
        this.distancia = distancia;
        this.pedagio = pedagio;
        this.consumoMedioVeiculo = consumoMedioVeiculo;
        this.cacheMusicos = cacheMusicos;
        this.alimentacao = alimentacao;
        this.aluguelEquipamentos = aluguelEquipamentos;
        this.demonstracao = demonstracao;
        this.passagemMusico = passagemMusico;
        this.desconto = desconto;
    };

}