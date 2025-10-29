package br.com.harmonicgroup.sigsmu_backend.model;


import br.com.harmonicgroup.sigsmu_backend.service.PacoteServicoService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "pacote_servico")
public class PacoteServico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pac_id")
    private Integer id;

    @Column(name = "pac_nome")
    private String nome;

    @Column(name = "pac_valor")
    private String valor;

    @Column(name = "pac_qtdMusicos")
    private String qtdMusicos;

    @Column(name = "pac_descricao")
    private String descricao;


    // Construtores
    public PacoteServico(){}

    public PacoteServico(Integer id, String nome, String valor, String qtdMusicos, String descricao){
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.qtdMusicos = qtdMusicos;
        this.descricao = descricao;
    }


}
