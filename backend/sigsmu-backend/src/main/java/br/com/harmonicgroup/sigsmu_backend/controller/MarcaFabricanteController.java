package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.MarcaFabricante;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.MarcaFabricanteService;

@RestController
@RequestMapping("/marcafabricante")
public class MarcaFabricanteController {
    
    @Autowired
    MarcaFabricanteService marcaFabricanteService;

    @GetMapping
    public List<MarcaFabricante> listarMarcasFabricante() {
        return marcaFabricanteService.listarMarcasFabricante();
    }

    @PostMapping
    public void cadastrarMarcaFabricante(@RequestBody MarcaFabricante marcaFabricante) {
        marcaFabricanteService.cadastrarMarcaFabricante(marcaFabricante);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarRepertorio(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     repertorioService.atualizarRepertorio(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirMarcaFabricante(@PathVariable Integer id) {
        marcaFabricanteService.excluirMarcaFabricante(id);
    }

}