package br.com.harmonicgroup.sigsmu_backend.model;

import br.com.harmonicgroup.sigsmu_backend.service.InstrumentoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Instrumento")
public class SolicitacaoServico {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ges_cpf")
    private String cpf;

    @Column(name = "ges_nome")
    private String nome;
    
    @Column(name = "ges_data_cadastro")
    private String dataCadastro;

    @Column(name = "ges_senha")
    private String senha;


    // Construtores
    public Gestor(){};
    
    public Gestor(String cpf, String nome, String dataCadastro, String senha){
        this.cpf = cpf;
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.senha = senha;
    };

}
