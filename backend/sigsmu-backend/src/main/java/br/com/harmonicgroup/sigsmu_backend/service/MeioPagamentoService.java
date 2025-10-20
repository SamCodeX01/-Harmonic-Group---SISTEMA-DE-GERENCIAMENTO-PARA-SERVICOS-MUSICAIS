package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.model.MeioPagamento;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.MeioPagamentoRepository;

@Service
public class MeioPagamentoService {
    
    @Autowired
    MeioPagamentoRepository meioPagamentoRepository;

    public List<MeioPagamento> listarMeiosPagamento() {
        return meioPagamentoRepository.findAll();
    }

    public void cadastrarMeioPagamento(MeioPagamento meioPagamento) {
        meioPagamentoRepository.save(meioPagamento);
    }

    public void atualizarMeioPagamento(UpdateDTO body, Integer id) {
        MeioPagamento atual = meioPagamentoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Meio de pagamento não encontrado!"));

        switch (body.getCampo()) {
            case "nome": atual.setNome( body.getNovoValor() );
                break;
        }
        meioPagamentoRepository.save(atual);
    }

    public void excluirMeioPagamento(Integer id) {
        meioPagamentoRepository.deleteById(id);
    }

}
