package br.com.harmonicgroup.sigsmu_backend.model;

import java.util.List;

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
    
    @Column(name = "ges_data_cadastro")
    private String dataCadastro;

    @Column(name = "ges_senha")
    private String senha;

    // Associativas
    @OneToMany(mappedBy = "gestor")
    private List<SolicitacaoServico> solicitacoesServico;


    // Construtores
    public Gestor(){};
    
    public Gestor(String cpf, String nome, String dataCadastro, String senha){
        this.cpf = cpf;
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.senha = senha;
    };

}