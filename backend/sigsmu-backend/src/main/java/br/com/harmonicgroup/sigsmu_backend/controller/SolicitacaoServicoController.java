package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.Custo;
import br.com.harmonicgroup.sigsmu_backend.model.SolicitacaoServico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.SolicitacaoServicoService;


@RestController
@RequestMapping("/solicitacaoservico")
public class SolicitacaoServicoController {
    
    @Autowired
    SolicitacaoServicoService solicitacaoServicoService;

    @GetMapping
    public List<SolicitacaoServico> listarSolicitacoesServico() {
        return solicitacaoServicoService.listarSolicitacoesServico();
    }

    @PostMapping
    public void cadastrarSolicitacaoServico(@RequestBody SolicitacaoServico solicitacaoServico) {
        solicitacaoServicoService.cadastrarSolicitacaoServico(solicitacaoServico);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarRepertorio(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     repertorioService.atualizarRepertorio(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirSolicitacaoServico(@PathVariable Integer id) {
        solicitacaoServicoService.excluirSolicitacaoServico(id);
    }


    // Retorna a solicitação de serviço relativa ao id passado como parâmetro
    @GetMapping("/buscar/{id}")
    public Optional<SolicitacaoServico> buscarSolicitacaoPorId(@PathVariable Integer id) {
        return solicitacaoServicoService.buscarSolicitacaoPorId(id);
    }

    // Retorna a solicitação de um cliente específico
    @GetMapping("/{cpf}")
    public Optional<SolicitacaoServico> buscarSolicitacaoPorCliente(@PathVariable String cpf) {
        return solicitacaoServicoService.buscarSolicitacaoPorCliente(cpf);
    }

    // Retorna a solicitação buscada por status - não usado!
    @GetMapping("/status")
    public List<SolicitacaoServico> buscarSolicitacoesPorStatus(@RequestParam Integer id) {
        return solicitacaoServicoService.buscarSolicitacoesPorStatus(id);
    }

    // Solicitações para a tela inicial do gestor
    @GetMapping("/ativa")
    public List<SolicitacaoServico> buscarSolicitacoesAtivas() {
        return solicitacaoServicoService.buscarSolicitacoesAtivas();
    }

    // Solicitações para a tela inicial do musico
    @GetMapping("/aceitacao")
    public List<SolicitacaoServico> buscarSolicitacoesParaAceitacao() {
        return solicitacaoServicoService.buscarSolicitacoesParaAceitacao();
    }
    

    // Muda o status da solicitação
    @PostMapping("/{sol_id}/status/{novo_stt_id}")
    public void mudarStatusDaSolicitacao(@PathVariable Integer sol_id, @PathVariable Integer novo_stt_id) {
        solicitacaoServicoService.mudarStatusDaSolicitacao(sol_id, novo_stt_id);
    }

    // Salva o custo do serviço
    @PostMapping("/custo/{sol_id}")
    public void definirCustoDoServico(@PathVariable Integer sol_id, @RequestBody Custo custo) {
        solicitacaoServicoService.definirCustoDoServico(sol_id, custo);
    }

}