package br.com.harmonicgroup.sigsmu_backend.model;


import java.util.List;

import br.com.harmonicgroup.sigsmu_backend.service.InstrumentoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "instrumento")
public class Instrumento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ins_id")
    private Integer id;

    @Column(name = "ins_nome")
    private String nome;

    //Associativas
    @ManyToOne
    @JoinColumn(name = "cat_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "mar_id")
    private MarcaFabricante marcaFabricante;


    @OneToMany(mappedBy = "instrumento")
    private List<AssInstrumentosEscolhidos> instrumentosEscolhidos;
    
    @OneToMany(mappedBy = "instrumento")
    private List<AssInstrumentosDoMusico> instrumentosDoMusico;


    // Construtores
    public Instrumento(){}

    public Instrumento(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }

}
