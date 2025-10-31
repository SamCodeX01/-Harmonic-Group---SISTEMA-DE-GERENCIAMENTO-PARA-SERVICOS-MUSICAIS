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

import br.com.harmonicgroup.sigsmu_backend.model.Custo;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.CustoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/custo")
public class CustoController {
    
    @Autowired
    CustoService custoService;

    @GetMapping
    public List<Custo> listarCustos() {
        return custoService.listarCustos();
    }

    @PostMapping
    public void cadastrarCusto(@RequestBody Custo custo) {
        custoService.cadastrarCusto(custo);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarRepertorio(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     repertorioService.atualizarRepertorio(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirCusto(@PathVariable Integer id) {
        custoService.excluirCusto(id);
    }

}