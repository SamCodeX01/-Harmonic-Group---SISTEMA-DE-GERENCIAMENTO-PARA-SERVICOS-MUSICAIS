package br.com.harmonicgroup.sigsmu_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class AssInstrumentosDoMusico {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "mus_cpf")
    private Musico musico;

    @ManyToOne
    @JoinColumn(name = "ins_id")
    private Instrumento instrumento;

}