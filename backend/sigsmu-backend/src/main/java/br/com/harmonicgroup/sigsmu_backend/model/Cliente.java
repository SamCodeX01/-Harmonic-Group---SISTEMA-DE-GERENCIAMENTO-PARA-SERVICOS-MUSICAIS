package br.com.harmonicgroup.sigsmu_backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.harmonicgroup.sigsmu_backend.service.ClienteService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "cliente")
public class Cliente {
    
    @Id
    @Column(name = "cli_cpf")
    private String cpf;

    @Column(name = "cli_nome")
    private String nome;
    
    @Column(name = "cli_dataNasc")
    private String dataNasc;

    @Column(name = "cli_endereco")
    private String endereco;

    // @Column(name = "cli_dataCadastro") // faltou REMOVER dos diagramas
    // private String dataCadastro;

    // @Column(name = "cli_senha") // faltou REMOVER dos diagramas
    // private String senha;

    @Column(name = "cli_email") // faltou ADICIONAR nos diagrama
    private String email;

    @Column(name = "cli_celular") // faltou ADICIONAR nos diagrama
    private String celular;

    @Column(name = "cli_contrato")
    private String contrato;

    // Associativas
    @JsonIgnore
    @OneToMany(mappedBy = "cliente")
    private List<SolicitacaoServico> solicitacoesServico;


    // Construtores
    public Cliente(){};
    
    public Cliente(String cpf, String nome, String email, String celular, String dataNasc, String endereco, String contrato){
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.dataNasc = dataNasc;
        this.endereco = endereco;
        this.contrato = contrato;
    };

}