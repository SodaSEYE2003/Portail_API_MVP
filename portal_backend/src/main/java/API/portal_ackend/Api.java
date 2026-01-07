package API.portal_ackend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@SpringBootApplication
public class Api {
 @Id

 @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long id;
 public static void main(String[] args) {
		SpringApplication.run(Api.class, args);
	}

}
