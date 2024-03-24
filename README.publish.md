* Change project version in `package.json`

* Commit the project

```bash
git commit -m "v1.0.22"
```

* Create an annotated tag

```bash
git tag -a v1.0.22 -m "v1.0.22"
```

* Push

```bash
git push
```

* Push tag to remote

```bash
git push origin --tags -f
```

* Publish project

```bash
npm publish
```