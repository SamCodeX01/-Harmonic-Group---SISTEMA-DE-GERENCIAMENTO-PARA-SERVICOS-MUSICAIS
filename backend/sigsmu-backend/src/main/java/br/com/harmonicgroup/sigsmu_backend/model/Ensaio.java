package br.com.harmonicgroup.sigsmu_backend.model;

import br.com.harmonicgroup.sigsmu_backend.service.EnsaioService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "ensaio")
public class Ensaio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ens_id")
    private Integer id;

    @Column(name = "ens_local")
    private String local;
    
    @Column(name = "ens_status")
    private String status;

    @Column(name = "ens_dataHoraInicio")
    private String dataHoraInicio;
    
    @Column(name = "ens_dataHoraTermino")
    private String dataHoraTermino;
    
    @Column(name = "ens_observacoes")
    private String observacoes;


    // Construtores
    public Ensaio(){};
    
    public Ensaio(Integer id, String local, String status, String dataHoraInicio, String dataHoraTermino, String observacoes){
        this.id = id;
        this.local = local;
        this.status = status;
        this.dataHoraInicio = dataHoraInicio;
        this.dataHoraTermino = dataHoraTermino;
        this.observacoes = observacoes;
    };

}