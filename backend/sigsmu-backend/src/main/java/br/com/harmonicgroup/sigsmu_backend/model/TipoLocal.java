package br.com.harmonicgroup.sigsmu_backend.model;


import java.util.List;

import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;
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
@Table(name = "tipo_local")
public class TipoLocal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "tip_id")
    private Integer id;

    @Column(name = "tip_tipo")
    private String tipo;

    // Associativas
    @OneToMany(mappedBy = "tipoLocal")
    private List<SolicitacaoServico> solicitacoesServico;


    // Construtores
    public TipoLocal(){}

    public TipoLocal(Integer id, String tipo){
        this.id = id;
        this.tipo = tipo;
    }


}
