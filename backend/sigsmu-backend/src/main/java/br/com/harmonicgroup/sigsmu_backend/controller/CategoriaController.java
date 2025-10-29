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

import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.model.MeioPagamento;
import br.com.harmonicgroup.sigsmu_backend.model.Repertorio;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.MeioPagamentoService;
import br.com.harmonicgroup.sigsmu_backend.service.RepertorioService;
import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/meiopagamento")
public class CategoriaController {
    
    @Autowired
    RepertorioService repertorioService;

    @GetMapping
    public List<Repertorio> listarRepertorio() {
        return repertorioService.listarRepertorio();
    }

    @PostMapping
    public void cadastrarRepertorio(@RequestBody Repertorio repertorio) {
        repertorioService.cadastrarRepertorio(repertorio);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarRepertorio(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     repertorioService.atualizarRepertorio(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirRepertorio(@PathVariable Integer id) {
        repertorioService.excluirRepertorio(id);
    }

}