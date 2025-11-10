package br.com.harmonicgroup.sigsmu_backend.model;

import java.util.List;

import br.com.harmonicgroup.sigsmu_backend.service.ClienteService;
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
@Table(name = "cliente")
public class Cliente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cli_cpf")
    private String cpf;

    @Column(name = "cli_nome")
    private String nome;
    
    @Column(name = "cli_email")
    private String email;

    @Column(name = "cli_celular")
    private String celular;
    
    @Column(name = "cli_dataNasc")
    private String dataNasc;
    
    @Column(name = "cli_endereco")
    private String endereco;

    // Associativas
    @OneToMany(mappedBy = "cliente")
    private List<SolicitacaoServico> solicitacoesServico;


    // Construtores
    public Cliente(){};
    
    public Cliente(String cpf, String nome, String email, String celular, String dataNasc, String endereco){
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.dataNasc = dataNasc;
        this.endereco = endereco;
    };

}