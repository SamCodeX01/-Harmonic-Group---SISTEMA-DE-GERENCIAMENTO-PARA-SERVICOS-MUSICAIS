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

import br.com.harmonicgroup.sigsmu_backend.model.Ensaio;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.EnsaioService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/ensaio")
public class EnsaioController {
    
    @Autowired
    EnsaioService ensaioService;

    @GetMapping
    public List<Ensaio> listarEnsaios() {
        return ensaioService.listarEnsaios();
    }

    @PostMapping
    public void cadastrarEnsaio(@RequestBody Ensaio ensaio) {
        ensaioService.cadastrarEnsaio(ensaio);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarRepertorio(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     repertorioService.atualizarRepertorio(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirEnsaio(@PathVariable Integer id) {
        ensaioService.excluirEnsaio(id);
    }

}