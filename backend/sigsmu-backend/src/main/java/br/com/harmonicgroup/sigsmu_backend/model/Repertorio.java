package br.com.harmonicgroup.sigsmu_backend.model;


import java.util.List;

import br.com.harmonicgroup.sigsmu_backend.service.RepertorioService;
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
@Table(name = "repertorio")
public class Repertorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rep_id")
    private Integer id;

    @Column(name = "rep_musica")
    private String musica;

    @Column(name = "rep_artista")
    private String artista;

    @Column(name = "rep_genero")
    private String genero;

    @Column(name = "rep_tempo")
    private String tempo;

    @Column(name = "rep_tocamos")
    private String tocamos;

    // Associativas
    @OneToMany(mappedBy = "repertorio")
    private List<AssMusicasEscolhidas> musicasEscolhidas;


    // Construtores
    public Repertorio(){}

    public Repertorio(Integer id, String musica, String artista, String genero, String tempo, String tocamos){
        this.id = id;
        this.musica = musica;
        this.artista = artista;
        this.genero = genero;
        this.tempo = tempo;
        this.tocamos = tocamos;
    }

}