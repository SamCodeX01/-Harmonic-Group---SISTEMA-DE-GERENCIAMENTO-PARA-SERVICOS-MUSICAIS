package br.com.harmonicgroup.sigsmu_backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.harmonicgroup.sigsmu_backend.service.GestorService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "gestor")
public class Gestor {
    
    @Id
    @Column(name = "ges_cpf")
    private String cpf;

    @Column(name = "ges_nome")
    private String nome;

    @Column(name = "ges_email") // faltou ADICIONAR nos diagrama
    private String email;

    @Column(name = "ges_celular") // faltou ADICIONAR nos diagrama
    private String celular;
    
    @Column(name = "ges_dataCadastro")
    private String dataCadastro;

    @Column(name = "ges_senha")
    private String senha;

    // Associativas
    @JsonIgnore
    @OneToMany(mappedBy = "gestor")
    private List<SolicitacaoServico> solicitacoesServico;


    // Construtores
    public Gestor(){};
    
    public Gestor(String cpf, String nome, String email, String celular, String dataCadastro, String senha){
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.dataCadastro = dataCadastro;
        this.senha = senha;
    };

}