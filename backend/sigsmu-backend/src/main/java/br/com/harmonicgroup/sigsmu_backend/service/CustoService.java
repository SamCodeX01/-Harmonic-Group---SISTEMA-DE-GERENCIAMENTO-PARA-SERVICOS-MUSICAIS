package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Custo;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.CustoRepository;



@Service
public class CustoService {
  
    @Autowired
    CustoRepository custoRepository;

    public List<Custo> listarCustos() {
        return custoRepository.findAll();
    }

    public void cadastrarCusto(Custo custo) {
        custoRepository.save(custo);
    }

    // public void atualizarCusto(UpdateDTO body, Integer id) {
    //     Custo atual = custoRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Custo não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     custoRepository.save(atual);
    // }

    public void excluirCusto(Integer id) {
        custoRepository.deleteById(id);
    }

}