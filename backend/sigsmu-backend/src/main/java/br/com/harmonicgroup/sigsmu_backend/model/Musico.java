package br.com.harmonicgroup.sigsmu_backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.harmonicgroup.sigsmu_backend.service.MusicoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "musico")
public class Musico {

    @Id
    @Column(name = "mus_cpf")
    private String cpf;

    @Column(name = "mus_nome")
    private String nome;
    
    @Column(name = "mus_dataNasc")
    private String dataNasc;

    @Column(name = "mus_endereco")
    private String endereco;
    
    @Column(name = "mus_dataCadastro")
    private String dataCadastro;
    
    @Column(name = "mus_senha")
    private String senha;

    // Associativas
    @JsonIgnore
    @OneToMany(mappedBy = "musico")
    private List<AssInstrumentosDoMusico> instrumentosDoMusico;

    @JsonIgnore
    @OneToMany(mappedBy = "musico")
    private List<AssGrupoDoServico> grupoDoServico;


    // Construtores
    public Musico(){};
    
    public Musico(String cpf, String nome, String dataNasc, String endereco, String dataCadastro, String senha){
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.endereco = endereco;
        this.dataCadastro = dataCadastro;
        this.senha = senha;
    };

}