package br.com.harmonicgroup.sigsmu_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.harmonicgroup.sigsmu_backend.service.AvaliacaoService;
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
@Table(name = "avaliacao")
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ava_id")
    private Integer id;

    @Column(name = "ava_titulo")
    private String titulo;
    
    @Column(name = "ava_nota")
    private String nota;

    @Column(name = "ava_descricao")
    private String descricao;

    //Associativas
    @JsonIgnore
    @OneToOne(mappedBy = "avaliacao")
    private SolicitacaoServico solicitacaoServico;


    // Construtores
    public Avaliacao(){};
    
    public Avaliacao(Integer id, String titulo, String nota, String descricao){
        this.id = id;
        this.titulo = titulo;
        this.nota = nota;
        this.descricao = descricao;
    };

}