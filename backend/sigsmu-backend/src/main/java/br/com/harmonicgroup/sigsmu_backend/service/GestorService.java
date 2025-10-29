package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.harmonicgroup.sigsmu_backend.model.Gestor;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.GestorRepository;

public class GestorService {

    @Autowired
    GestorRepository gestorRepository;

    public List<Gestor> listarMeiosPagamento() {
        return gestorRepository.findAll();
    }

    public void cadastrarMeioPagamento(Gestor gestor) {
        gestorRepository.save(gestor);
    }

    // public void atualizarMeioPagamento(UpdateDTO body, Integer id) {
    //     MeioPagamento atual = meioPagamentoRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Meio de pagamento não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     meioPagamentoRepository.save(atual);
    // }

    public void excluirMeioPagamento(String cpf) {
        gestorRepository.deleteById(cpf);
    }

}
