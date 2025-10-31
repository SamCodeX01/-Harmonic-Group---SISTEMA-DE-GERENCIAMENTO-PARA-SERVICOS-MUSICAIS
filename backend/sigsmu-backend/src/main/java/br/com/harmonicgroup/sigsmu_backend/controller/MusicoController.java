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

import br.com.harmonicgroup.sigsmu_backend.model.Musico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.MusicoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/musico")
public class MusicoController {
    
    @Autowired
    MusicoService musicoService;

    @GetMapping
    public List<Musico> listarMusicos() {
        return musicoService.listarMusicos();
    }

    @PostMapping
    public void cadastrarMusico(@RequestBody Musico musico) {
        musicoService.cadastrarMusico(musico);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarRepertorio(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     repertorioService.atualizarRepertorio(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirMusico(@PathVariable String cpf) {
        musicoService.excluirMusico(cpf);
    }

}