package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.MeioPagamento;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.MeioPagamentoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/meiopagamento")
public class MeioPagamentoController {
    
    @Autowired
    MeioPagamentoService meioPagamentoService;

    @GetMapping
    public List<MeioPagamento> listarMeiosPagamento() {
        return meioPagamentoService.listarMeiosPagamento();
    }

    @PostMapping
    public void cadastrarMeioPagamento(@RequestBody MeioPagamento meioPagamento) {
        meioPagamentoService.cadastrarMeioPagamento(meioPagamento);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarMeioPagamento(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     meioPagamentoService.atualizarMeioPagamento(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirMeioPagamento(@PathVariable Integer id) {
        meioPagamentoService.excluirMeioPagamento(id);
    }

}