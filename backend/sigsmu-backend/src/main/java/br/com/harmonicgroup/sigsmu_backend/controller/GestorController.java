package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.Gestor;
import br.com.harmonicgroup.sigsmu_backend.service.GestorService;

@RestController
@RequestMapping("/gestor")
public class GestorController {
    
    @Autowired
    GestorService gestorService;

    @GetMapping
    public List<Gestor> listarGestores() {
        return gestorService.listarGestores();
    }

    @GetMapping("/{cpf}")
    public Optional<Gestor> buscarGestorPorCpf(@PathVariable String cpf) {
        return gestorService.buuscarGestorPorCpf(cpf);
    }

}
