package br.com.harmonicgroup.sigsmu_backend.model;

import br.com.harmonicgroup.sigsmu_backend.service.CustoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Custo")
public class Custo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ges_cpf")
    private Integer id;

    @Column(name = "ges_nome")
    private String combustivel;
    
    @Column(name = "ges_data_cadastro")
    private String precoLitro;

    @Column(name = "ges_senha")
    private String distancia;

    @Column(name = "ges_senha")
    private String pedagio;

    @Column(name = "ges_senha")
    private String consumoMedioVeiculo;

    @Column(name = "ges_senha")
    private String cacheMusicos;

    @Column(name = "ges_senha")
    private String alimentacao;

    @Column(name = "ges_senha")
    private String aluguelEquipamentos;

    @Column(name = "ges_senha")
    private String demonstracao;

    @Column(name = "ges_senha")
    private String passagemMusico;

    @Column(name = "ges_senha")
    private String desconto;


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