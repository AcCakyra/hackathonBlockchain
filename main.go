package main

import (
	"net/http"
)

func main() {
	// что бы иметь возможность использовать js скрипты из html файлов
	fs := http.FileServer(http.Dir("js/"))

	http.Handle("/js/", http.StripPrefix("/js/", fs))
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request){
			 http.ServeFile(w, r, "templates/login.html")
	})
	http.ListenAndServe(":8888", nil)
}
