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
    
    // @Column(name = "mus_dataNasc")
    // private String dataNasc;

    @Column(name = "mus_endereco")
    private String endereco;
    
    @Column(name = "mus_dataCadastro")
    private String dataCadastro;
    
    @Column(name = "mus_senha")
    private String senha;

    @Column(name = "mus_github")
    private String github;

    @Column(name = "mus_portifolio")
    private String portifolio;

    @Column(name = "mus_instagram")
    private String instagram;

    @Column(name = "mus_facebook")
    private String facebook;

    @Column(name = "mus_curriculo")
    private String curriculo;

    @Column(name = "mus_contrato")
    private String contrato;

    // Associativas
    @JsonIgnore
    @OneToMany(mappedBy = "musico")
    private List<AssInstrumentosDoMusico> instrumentosDoMusico;

    @JsonIgnore
    @OneToMany(mappedBy = "musico")
    private List<AssGrupoDoServico> grupoDoServico;


    // Construtores
    public Musico(){};
    
    public Musico(String cpf, String nome, String dataNasc, String endereco, String dataCadastro, String senha, String github,
        String portifolio,String instagram,String facebook,String curriculo,String contrato){
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
        this.dataCadastro = dataCadastro;
        this.senha = senha;
        this.github = github;
        this.portifolio = portifolio;
        this.instagram = instagram;
        this.facebook = facebook;
        this.curriculo = curriculo;
        this.contrato = contrato;
    };

}